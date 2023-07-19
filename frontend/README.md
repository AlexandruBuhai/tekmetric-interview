# Alex Buhai - Tech Interview Project

## Details

**Time**: **Spent around 4 hours and a bit.** I know it's more than the allocated 2 hours, but I wanted to spend some time learning TailwindCSS and React-Beautiful-DND. There is a commit around 2 hours mark, that contains the basic functionality, however I added some more features and polished it a bit more.

**Technology Used**:

- React
- React Context
- TailwindCSS
- Preline CO (Tailwind components)
- React Testing Library + Jest (for testing)
- React-Beautiful-DND (a fork for it by @hello-pangea, since the original is not maintained by Atlassian anymore and doesn't work well with React 18)

## Story 

Hello, interviewer! 👋

Since the Goals of the project were not very specific, I decided to make something similar to Tekmetric's Workflow Mangement board (or what I imagine it looks like). Since I didn't find a Car API, I used Dogs instead. I also learned that Tekmetric uses TailwindCSS on its end and since I didn't have any experience with it I used this coding challenge to find out more about it.

The basic functionality is this:

- You have a list of dogs from the DogsAPI
- You can add more dogs to the list
- You can select your favorite dog from the list, and it will be saved in React Context
- You can drag and drop the dogs between the columns, and a small animation will happen there
  
## Steps to run the project locally

- `yarn install`
- `yarn start`
- `yarn test` - to run the tests suite

## (Initial Specified) Goals

1. Fetch Data from the backend Crud API you created or from a public API
2. Display data from API onto your page (Table, List, etc.)
3. Apply a styling solution of your choice to make your page look different (CSS, SASS, CSS-in-JS)
4. Have fun
