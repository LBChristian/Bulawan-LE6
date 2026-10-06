# Laboratory Exercise 6 - Frontend Angular Project

## Design Added

The Lab 6 design update transforms the existing Lab 5 blog frontend into a cleaner, responsive blog interface while preserving the existing Angular routes, API calls, authentication, and backend endpoints.

### Main design changes

1. Redesigned navigation bar with active-route states.
2. Added a responsive two-column post-card layout.
3. Added post excerpts and metadata to the post list.
4. Redesigned the post detail page as an article view.
5. Redesigned Login and Register as centered authentication cards.
6. Redesigned Add Post as a dedicated writing/editor page.
7. Added consistent buttons, form fields, messages, spacing, typography, and responsive behavior.
8. Added a simple footer.
9. Fixed the successful Add Post redirect from `/posts` to `/`, because `/posts` is not an existing route in the Lab 5 routing configuration.

## Existing Backend Compatibility

No backend endpoint was changed.

The frontend continues to use:

- GET `https://localhost:7292/api/controller`
- GET `https://localhost:7292/api/controller/{id}`
- POST `https://localhost:7292/api/controller/add`
- POST `https://localhost:7292/api/controller/register`
- POST `https://localhost:7292/Login`

The existing JWT interceptor remains unchanged.

## Running the Project

1. Start the BlogAPI backend in Visual Studio.
2. Make sure the BlogAPI launch profile uses `https://localhost:7292`.
3. Open this Angular project in a terminal.
4. Run:

   npm install

5. Start Angular:

   npm start

6. Open the Angular development URL shown in the terminal.

## Lab 6 Submission

Required files from the laboratory sheet:

- LE6-1-SURNAME.docx
- LE6-VID-SURNAME.mp4

The Word file should contain:
- screenshots showing the added design
- the relevant HTML/CSS/TypeScript code

The video should demonstrate the redesigned frontend and briefly explain the design changes.

## Important

The source package contains the completed Lab 6 frontend source. Runtime screenshots should be captured after running the Angular application locally so that the screenshots show the actual working project and live backend data.
