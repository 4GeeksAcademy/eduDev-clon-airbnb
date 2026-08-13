interface LoadingStateProps { message?: string }

export const LoadingState = ({ message = "Finding great stays…" }: LoadingStateProps) => (
  <div className="grid min-h-48 place-items-center" role="status">
    <div className="text-center"><span className="mx-auto mb-3 block size-8 animate-spin rounded-full border-4 border-rose-100 border-t-[#FF385C]" /><p className="text-sm text-zinc-600">{message}</p></div>
  </div>
);
