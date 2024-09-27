'use server'

import { auth, currentUser } from '@clerk/nextjs/server'

import { getUserSubscription } from '@/db/queries'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'

const returnUrl = absoluteUrl('/shop')

export const createStripeUrl = async () => {
  const { userId } = auth()
  const user = await currentUser()

  if (!user || !userId) throw new Error('Unauthorized')

  const userSubscription = await getUserSubscription()

  if (userSubscription?.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl
    })

    return {
      data: stripeSession.url
    }
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: user.emailAddresses[0].emailAddress,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Lingo Pro',
            description: 'Unlimited hearts for 1 month'
          },
          unit_amount: 2000,
          recurring: { interval: 'month' }
        }
      }
    ],
    metadata: {
      userId
    },
    success_url: returnUrl,
    cancel_url: returnUrl
  })

  return {
    data: stripeSession.url
  }
}
