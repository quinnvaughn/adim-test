# Adim Full Stack Takehome

Hi! Welcome to the take home. Here is a bare-bones [Next.js](nextjs.org/) app created with the [t3 app](https://create.t3.gg/)! The bottom of this readme contains some usage tips if you are new to t3 -- essentially it sets up a bit of boilerplate so you can get moving faster.

## Task

Using the [giphy.com API](https://developers.giphy.com/), create an app that accomplishes the following:

1. User can search for a gif
2. User can select a gif from search results
3. Clicking submit will save the gif as a user's PFP (profile pic)

```
How you save the pfp image file is up to you. One option is to upload to an Adim internal S3 bucket. The
access keys will be provided along with this prompt.
```

## Possible Extra Credit Ideas

- If you finish within the allotted time and want to do extra credit, feel free to tackle one or more of the below ideas. Or feel free to come up with your own!

1. Support a history of pfps for a user, similar to how Facebook allows you to view the history of a user's profile pictures.
2. Flesh out the profile page to use more than just a pfp
3. Add support for image descriptions to accompany the pfp.

### To set up dev env

1. Clone this repo
2. In terminal, run `npm install`
3. In terminal, run `npm run dev`
4. You now have your nextjs app hot-reloading on port 3000

## How to submit your response

Upload your response to a private Github repository and give access to [Alexei](https://github.com/amihalopoulos), [Sam](https://github.com/sammccord), and [Aaron](https://github.com/aaron-adimverse). We should be able to pull your repo and run it locally, just like the instructions above. If running your code has any other dependencies (e.g. API keys), please provide them together with your submission. You can also deploy your app on [Vercel](vercel.com/) (they offer a free plan).

======

# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

We also [roll our own docs](https://beta.create.t3.gg) with some summary information and links to the respective documentation.

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)
