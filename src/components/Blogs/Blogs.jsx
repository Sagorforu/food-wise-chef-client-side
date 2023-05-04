import React from "react";

const Blogs = () => {
  return (
    <div className="lg:px-36 px-2 py-5">
      <div className="background-color text-center pb-8 lg:pt-12 pt-4">
        <h2 className="text-[#1A1919] font-bold text-3xl lg:text-5xl">
          Here is some questions and answers
        </h2>
      </div>
      <div className="">
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q1: What is the differences between uncontrolled and controlled
          components.?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            <p className="font-bold text-[#383838] mt-3">
              Uncontrolled Components
            </p>
            Uncontrolled components are UI components that manage their own
            state internally, without any external control or supervision. They
            rely on internal state management mechanisms and event handling to
            update their state and render themselves. Examples of uncontrolled
            components include simple input fields and checkboxes.
            <p className="font-bold text-[#383838] mt-3">
              Controlled Components
            </p>
            Controlled components, on the other hand, are UI components that
            rely on external control and supervision to manage their state. They
            receive their state and other properties as props from a parent
            component, and they notify the parent component of any changes
            through events. Examples of controlled components include complex
            forms and custom UI components.
            <p className="font-bold text-[#383838] mt-3">
              In summary, the main differences between uncontrolled and
              controlled components are:
            </p>
            <ul>
              <li>
                -- Uncontrolled components manage their own state internally,
                while controlled components rely on external state management.
              </li>
              <li>
                -- Uncontrolled components handle their own events internally,
                while controlled components notify their parent component of any
                changes through events.
              </li>
              <li>
                -- Uncontrolled components are generally simpler and easier to
                use, while controlled components offer more flexibiolty and
                control over the UI state.
              </li>
            </ul>
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q2: How to validate React props using PropTypes?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            In React, you can use PropTypes to validate the props that are
            passed to a component. PropTypes is a built-in library that provides
            a way to define the expected types and values of the props. we are
            importing the PropTypes library and defining a functional component.
            We are also defining a propTypes object on the component, which
            specifies that the message prop should be a string and is required.
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q3: What is the difference between nodejs and express js?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            <p>
              Node.js and Express.js are both popular JavaScript frameworks, but
              they serve different purposes.
            </p>
            <p className="font-bold text-[#383838] mt-3">Node.js</p>
            Node.js is a runtime environment that allows you to run JavaScript
            on the server-side. It provides an event-driven, non-blocking I/O
            model that makes it ideal for building scalable, real-time
            applications. With Node.js, you can build web servers, command-line
            tools, and other types of applications that can be run outside of a
            web browser.
            <p className="font-bold text-[#383838] mt-3">Express.js</p>
            Express.js is a web application framework built on top of Node.js.
            It provides a set of features and tools for building web
            applications and APIs, such as routing, middleware, and template
            engines. Express.js is designed to simplify the process of building
            web applications in Node.js by providing a set of high-level
            abstractions and conventions.
            <p className="font-bold text-[#383838] mt-3">
              In summary, the main differences between Node.js and Express.js
              are:
            </p>
            <ul>
              <li>
                -- Node.js is a runtime environment that allows you to run
                JavaScript on the server-side, while Express.js is a web
                application framework built on top of Node.js.
              </li>
              <li>
                -- Node.js provides the low-level APIs and functionality for
                building server-side applications, while Express.js provides
                higher-level abstractions and conventions for building web
                applications and APIs.
              </li>
              <li>
                -- Node.js can be used to build a wide range of applications,
                while Express.js is focused specifically on web development.
              </li>
            </ul>
          </span>
        </p>
        <h2 className="text-color mt-10 text-2xl lg:text-4xl font-bold">
          Q4: What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl">
          Answer:{" "}
          <span className="text-[#757575] mt-3 text-lg font-semibold">
            A custom hook is a JavaScript function that uses the built-in React
            hooks useState, useEffect, useContext, etc. to provide custom
            functionality and state management in a reusable way. Custom hooks
            allow you to extract logic and state management from a component and
            reuse it across multiple components, making your code more modular
            and easier to maintain. <br />
            You would create a custom hook in React when you want to reuse logic
            across multiple components or when you want to abstract away some of
            the complexity of managing state in a component.
            <p className="font-bold text-[#383838] mt-3">
            Here are some common reasons why you might want to create a custom hook:
            </p>
            <ol>
              <li>1. Reuse logic: If you find yourself writing the same logic in multiple components, you can extract that logic into a custom hook and reuse it across all of those components.</li>
              <li>2. Share state: If you have complex state management logic that you want to share between multiple components, you can create a custom hook to manage that state and then use it in each of the components.</li>
              <li>3. Simplify component logic: If you have a component with complex logic that's hard to read or maintain, you can extract some of that logic into a custom hook to make the component code simpler and easier to understand.</li>
              <li>4. Improve code organization: If you have a large component with a lot of state and logic, you can use custom hooks to break up that logic into smaller, more manageable pieces, improving the overall organization and readability of your code.</li>
            </ol>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
