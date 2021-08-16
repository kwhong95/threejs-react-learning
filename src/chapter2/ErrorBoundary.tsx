import React from "react";

const ErrorBoundary = (
  { children }: { children: React.ReactNode }
): JSX.Element => {
  const [ error, setError ] = React.useState<boolean>(false)


  return (
    <>
      {children}
    </>
  )
}
