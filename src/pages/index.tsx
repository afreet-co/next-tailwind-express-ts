import NextLink from "next/link";

function IndexPage() {
  return (
    <div className="mt-40 p-4 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center flex-col space-y-2">
      <h1 className="font-semibold uppercase px-4">Next Tailwind Express</h1>
      <p>
        A full fledged solution to host api and next.js in a single project.
      </p>
      <i>
        Note : The api can't be used now to be used in static site generation at
        build time, cause it will be interfered with the server build.
      </i>
    </div>
  );
}

export default IndexPage;
