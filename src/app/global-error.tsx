"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError(props: { error: unknown }) {
  return (
    <html>
      <body>
        <Error statusCode={500} title="Error" />
      </body>
    </html>
  );
}
