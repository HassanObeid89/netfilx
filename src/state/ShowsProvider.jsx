// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import courseReducer from "./showReducer";

// Properties
const UserContext = createContext(null);

export function CoursesProvider({ children }) {
  // Local state
  const [courses, dispatchCourses] = useReducer(courseReducer, {});

  return (
    <UserContext.Provider
      value={{ courses: courses, dispatchCourses: dispatchCourses }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useCourse() {
  return useContext(UserContext);
}
