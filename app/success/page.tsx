// app/success/page.tsx
export default function SuccessPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
  
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            🎉 Thank You!
          </h1>
  
          {/* Message */}
          <p className="text-gray-600 mb-6">
            Your message has been successfully submitted.  
            We’ll get back to you as soon as possible 🚀
          </p>
  
          {/* Back Button */}
          <a
            href="/"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  