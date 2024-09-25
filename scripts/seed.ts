import { neon } from '@neondatabase/serverless'

import 'dotenv/config'

import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '@/db/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log('Seeding database...')

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)
    await db.delete(schema.userSubscription)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'Spanish',
        imageSrc: '/es.svg'
      },
      {
        id: 2,
        title: 'French',
        imageSrc: '/fr.svg'
      },
      {
        id: 3,
        title: 'Italian',
        imageSrc: '/it.svg'
      },
      {
        id: 4,
        title: 'Japanese',
        imageSrc: '/jp.svg'
      },
      {
        id: 5,
        title: 'Croatian',
        imageSrc: '/hr.svg'
      }
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Unit 1',
        description: 'Learn the basics of Spanish',
        order: 1
      }
    ])

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: 'Nouns',
        order: 1
      },
      {
        id: 2,
        unitId: 1,
        title: 'Verbs',
        order: 2
      },
      {
        id: 3,
        unitId: 1,
        title: 'Adjectives',
        order: 3
      },
      {
        id: 4,
        unitId: 1,
        title: 'Phrases',
        order: 4
      },
      {
        id: 5,
        unitId: 1,
        title: 'Questions',
        order: 5
      },
      {
        id: 6,
        unitId: 1,
        title: 'Greetings',
        order: 6
      },
      {
        id: 7,
        unitId: 1,
        title: 'Numbers',
        order: 7
      },
      {
        id: 8,
        unitId: 1,
        title: 'Colors',
        order: 8
      },
      {
        id: 9,
        unitId: 1,
        title: 'Animals',
        order: 9
      },
      {
        id: 10,
        unitId: 1,
        title: 'Food',
        order: 10
      }
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        question: 'Which one of these is the "the man"?',
        order: 1
      },
      {
        id: 2,
        lessonId: 1,
        type: 'ASSIST',
        question: '"The Man"',
        order: 2
      },
      {
        id: 3,
        lessonId: 1,
        type: 'SELECT',
        question: 'Which one of these is the "the robot"?',
        order: 3
      },
      {
        id: 4,
        lessonId: 2,
        type: 'SELECT',
        question: 'Which one of these is the "the man"?',
        order: 1
      },
      {
        id: 5,
        lessonId: 2,
        type: 'ASSIST',
        question: '"The Man"',
        order: 2
      },
      {
        id: 6,
        lessonId: 2,
        type: 'SELECT',
        question: 'Which one of these is the "the robot"?',
        order: 3
      }
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: '/man.svg',
        text: 'el hombre',
        audioSrc: '/es_man.mp3',
        correct: true
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: '/woman.svg',
        text: 'la mujer',
        audioSrc: '/es_woman.mp3',
        correct: false
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: '/robot.svg',
        text: 'el robot',
        audioSrc: '/es_robot.mp3',
        correct: false
      },
      {
        id: 4,
        challengeId: 2,
        text: 'el hombre',
        audioSrc: '/es_man.mp3',
        correct: true
      },
      {
        id: 5,
        challengeId: 2,
        text: 'la mujer',
        audioSrc: '/es_woman.mp3',
        correct: false
      },
      {
        id: 6,
        challengeId: 2,
        text: 'el robot',
        audioSrc: '/es_robot.mp3',
        correct: false
      },
      {
        id: 7,
        challengeId: 3,
        imageSrc: '/man.svg',
        text: 'el hombre',
        audioSrc: '/es_man.mp3',
        correct: false
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: '/woman.svg',
        text: 'la mujer',
        audioSrc: '/es_woman.mp3',
        correct: false
      },
      {
        id: 9,
        challengeId: 3,
        imageSrc: '/robot.svg',
        text: 'el robot',
        audioSrc: '/es_robot.mp3',
        correct: true
      }
    ])

    console.log('Seeding finished')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
