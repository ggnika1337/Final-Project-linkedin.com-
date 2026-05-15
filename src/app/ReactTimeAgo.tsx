"use client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export default function ReactTimeAgo({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
