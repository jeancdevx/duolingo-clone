# Lingo - (Duolingo Clone)

![Lingo](./public/github/lingo.png)

## 🦞 Folder Structure

```bash
duolingo-clone/
  |- actions/
    |-- challenge-progress.ts
    |-- user-progress.ts
    |-- user-subscription.ts
  |- app/
    |-- (auth)
      |-- sign-in
        |-- [[...sign-in]]
          |-- page.tsx
      |-- sign-up
        |-- [[...sign-up]]
          |-- page.tsx
      |-- layout.tsx
    |-- (main)
      |-- courses
        |-- page.tsx
      |-- leaderboard
        |-- page.tsx
      |-- learn
        |-- page.tsx
      |-- quests
        |-- page.tsx
      |-- shop
        |-- page.tsx
      |-- layout.tsx
    |-- (marketing)
      |-- layout.tsx
      |-- page.tsx
    |-- admin
      |-- app.tsx
      |-- page.tsx
    |-- api
      |-- challengeOptions
        |-- [challengeOptionId]
          |-- route.ts
        |-- route.ts
      |-- challenges
        |-- [challengeId]
          |-- route.ts
        |-- route.ts
      |-- courses
        |-- [courseId]
          |-- route.ts
        |-- route.ts
      |-- lessons
        |-- [lessonId]
          |-- route.ts
        |-- route.ts
      |-- units
        |-- [unitId]
          |-- route.ts
        |-- route.ts
      |-- webhooks
        |-- stripe
          |-- route.ts
      |-- buttons
        |-- page.tsx
      |-- layout.tsx
      |-- lesson
        |-- [lessonId]
          |-- page.tsx
        |-- layout.tsx
        |-- page.tsx
      |-- loading.tsx
  |- components/
    |-- Admin
      |-- Challenge
        |-- ChallengeCreate.tsx
        |-- ChallengeEdit.tsx
        |-- ChallengeList.tsx
        |-- index.ts
      |-- ChallengeOption
        |-- ChallengeOptionCreate.tsx
        |-- ChallengeOptionEdit.tsx
        |-- ChallengeOptionList.tsx
        |-- index.ts
      |-- Course
        |-- CourseCreate.tsx
        |-- CourseEdit.tsx
        |-- CourseList.tsx
        |-- index.ts
      |-- Lesson
        |-- index.ts
        |-- LessonCreate.tsx
        |-- LessonEdit.tsx
        |-- LessonList.tsx
      |-- Unit
        |-- index.ts
        |-- UnitCreate.tsx
        |-- UnitEdit.tsx
        |-- UnitList.tsx
    |-- Courses
      |-- Card
        |-- Card.tsx
        |-- index.ts
      |-- LessonButton
        |-- index.ts
        |-- LessonButton.tsx
      |-- List
        |-- index.ts
        |-- List.tsx
      |-- Unit
        |-- index.ts
        |-- Unit.tsx
        |-- UnitBanner.tsx
    |-- Header
      |-- Header.tsx
      |-- index.ts
    |-- Leaderboard
      |-- LeaderboardList
        |-- index.ts
        |-- LeaderboardList.tsx
    |-- Learn
      |-- Units
        |-- index.ts
        |-- Units.tsx
    |-- Lesson
      |-- Card
        |-- Card.tsx
        |-- index.ts
      |-- Challenge
        |-- Challenge.tsx
        |-- index.ts
      |-- Footer
        |-- Footer.tsx
        |-- index.ts
      |-- Header
        |-- Header.tsx
        |-- index.ts
      |-- QuestionBubble
        |-- index.ts
        |-- QuestionBubble.tsx
      |-- Quiz
        |-- index.ts
        |-- Quiz.tsx
      |-- ResultCard
        |-- index.ts
        |-- ResultCard.tsx
    |-- Loader
      |-- index.ts
      |-- Loader.tsx
    |-- Logo
      |-- index.ts
      |-- Logo.tsx
    |-- Marketing
      |-- Footer
        |-- constants.ts
        |-- Footer.tsx
        |-- index.ts
      |-- Header
        |-- Header.tsx
        |-- index.ts
    |-- MobileHeader
      |-- index.ts
      |-- MobileHeader.tsx
    |-- MobileSidebar
      |-- index.ts
      |-- MobileSidebar.tsx
    |-- Modals
      |-- ExitModal.tsx
      |-- HeartsModal.tsx
      |-- PracticeModal.tsx
    |-- Promo
      |-- index.ts
      |-- Promo.tsx
    |-- Quests
      |-- QuestList
        |-- index.ts
        |-- QuestList.tsx
    |-- Shop
      |-- Items
        |-- index.ts
        |-- Items.tsx
    |-- Sidebar
      |-- constants.ts
      |-- index.ts
      |-- Sidebar.tsx
      |-- SidebarItem.tsx
    |-- Skeletons
      |-- index.ts
      |-- Skeletons.tsx
    |-- ui
      |-- Avatar.tsx
      |-- Badge.tsx
      |-- Button.tsx
      |-- Dialog.tsx
      |-- Progress.tsx
      |-- Separator.tsx
      |-- Sheet.tsx
      |-- Skeleton.tsx
      |-- Sonner.tsx
    |-- UserProgress
      |-- index.ts
      |-- UserProgress.tsx
    |-- Wrappers
      |-- FeedWrapper.tsx
      |-- StickyWrapper.tsx
  |- constants.ts
  |- db/
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
    |-- boy.svg
    |-- es.svg
    |-- finish.svg
    |-- fr.svg
    |-- girl.svg
    |-- heart.svg
    |-- hero.svg
    |-- hr.svg
    |-- it.svg
    |-- jp.svg
    |-- leaderboard.svg
    |-- learn.svg
    |-- man.svg
    |-- mascot_bad.svg
    |-- mascot_sad.svg
    |-- mascot.svg
    |-- points.svg
    |-- quests.svg
    |-- robot.svg
    |-- shop.svg
    |-- unlimited.svg
    |-- woman.svg
    |-- zombie.svg
  |- scripts/
    |-- production.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- styles/
    |-- globals.css
  |- .eslintrc.json
  |- .gitignore
  |- .husky/
    |-- commit-msg
    |-- pre-commit
  |- .lintstagedrc
  |- .prettierignore
  |- .prettierrc
  |- commitlint.config.ts
  |- components.json
  |- drizzle.config.ts
  |- middleware.ts
  |- next.config.mjs
  |- package.json
  |- postcss.config.mjs
  |- tailwind.config.ts
  |- tsconfig.json
```

## 🌟 Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
# or CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx" for multiple admins.

```

5. Obtain Clerk Authentication Keys

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:
      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Look for the section related to authentication keys.
      - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
        provided in that section.

6. Retrieve Neon Database URL

   1. **Source**: Database Provider (e.g., Neon, PostgreSQL)
   2. **Procedure**:
      - Access your database provider's platform or configuration.
      - Locate the database connection details.
      - Replace `<user>`, `<password>`, `<host>`, and `<port>` placeholders in
        the URI with your actual database credentials.
      - Ensure to include `?sslmode=require` at the end of the URL for SSL mode
        requirement.

7. Fetch Stripe API Key and Webhook Secret

   1. **Source**: Stripe Dashboard
   2. **Procedure**:
      - Log in to your Stripe account.
      - Navigate to the dashboard or API settings.
      - Find the section related to API keys and webhook secrets.
      - Copy the `STRIPE_API_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

8. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed
        application.

9. Identify Clerk Admin User IDs

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:

      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Find the section related to admin user IDs.
      - Copy the user IDs provided, ensuring they are separated by commas and
        spaces.

10. Save and Secure:

- Save the changes to the `.env` file.

11. Install Project Dependencies using `npm install --legacy-peer-deps` or
    `yarn install --legacy-peer-deps`.

12. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
npm run db:push && npm run db:prod
```

This command uses `npm` to execute the Typescript file (`scripts/prod.ts`) and
writes challenges data in database.

13. Verify Data in Database:

Once the script completes, check your database to ensure that the challenges
data has been successfully seeded.

14. Now app is fully configured 👍 and you can start using this app using either
    one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure
and do not expose them publicly.

## 🧑🏻‍💻 Tech Stack

[![React JS](https://skillicons.dev/icons?i=react 'React JS')](https://react.dev/ 'React JS')
[![Next JS](https://skillicons.dev/icons?i=next 'Next JS')](https://nextjs.org/ 'Next JS')
[![Typescript](https://skillicons.dev/icons?i=ts 'Typescript')](https://www.typescriptlang.org/ 'Typescript')
[![Tailwind CSS](https://skillicons.dev/icons?i=tailwind 'Tailwind CSS')](https://tailwindcss.com/ 'Tailwind CSS')
[![Vercel](https://skillicons.dev/icons?i=vercel 'Vercel')](https://vercel.app/ 'Vercel')
[![Postgresql](https://skillicons.dev/icons?i=postgres 'Postgresql')](https://www.postgresql.org/ 'Postgresql')
