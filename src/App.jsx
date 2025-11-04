import { useState } from "react";
import Header from "./components/Header";
import SpecInput from "./components/SpecInput";
import EndpointList from "./components/EndpointList";
import Footer from "./components/Footer";

const DUMMY_ENDPOINTS = [
  {
    method: "get",
    path: "/api/v1/users",
    summary: "List users",
    description: "Retrieve a paginated list of users in the workspace.",
    parameters: [
      { name: "page", in: "query", required: false, description: "Page number (1-based)" },
      { name: "limit", in: "query", required: false, description: "Items per page (max 100)" },
    ],
    response: "200 OK — application/json (User[])",
  },
  {
    method: "get",
    path: "/api/v1/users/{id}",
    summary: "Get user",
    description: "Fetch a single user by their unique identifier.",
    parameters: [
      { name: "id", in: "path", required: true, description: "The user ID" },
    ],
    response: "200 OK — application/json (User)",
  },
  {
    method: "post",
    path: "/api/v1/users",
    summary: "Create user",
    description: "Create a new user with the provided details.",
    parameters: [
      { name: "body", in: "body", required: true, description: "User payload (JSON)" },
    ],
    response: "201 Created — application/json (User)",
  },
  {
    method: "delete",
    path: "/api/v1/users/{id}",
    summary: "Delete user",
    description: "Permanently remove a user.",
    parameters: [
      { name: "id", in: "path", required: true, description: "The user ID" },
    ],
    response: "204 No Content",
  },
  {
    method: "get",
    path: "/api/v1/posts",
    summary: "List posts",
    description: "Return recent posts with authors and metadata.",
    parameters: [
      { name: "q", in: "query", required: false, description: "Full-text search query" },
    ],
    response: "200 OK — application/json (Post[])",
  },
  {
    method: "patch",
    path: "/api/v1/posts/{id}",
    summary: "Update post",
    description: "Partially update a post. Only provided fields will be updated.",
    parameters: [
      { name: "id", in: "path", required: true, description: "The post ID" },
      { name: "body", in: "body", required: true, description: "Patch payload (JSON)" },
    ],
    response: "200 OK — application/json (Post)",
  },
];

function App() {
  const [loadedUrl, setLoadedUrl] = useState("");

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />
      <main>
        <SpecInput onLoad={setLoadedUrl} />
        {loadedUrl && (
          <div className="mx-auto max-w-6xl px-4 mt-2 text-sm text-zinc-600">
            Loaded from: <span className="font-mono text-emerald-700">{loadedUrl}</span>
          </div>
        )}
        <EndpointList endpoints={DUMMY_ENDPOINTS} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
