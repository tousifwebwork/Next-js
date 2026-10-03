


export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-200 text-black">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
