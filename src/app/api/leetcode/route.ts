import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "ripelabrador";
const BASE_URL = "https://alfa-leetcode-api.onrender.com";

export async function GET() {
  try {
    // Fetch all three endpoints in parallel
    const [solvedRes, calendarRes, profileRes] = await Promise.all([
      fetch(`${BASE_URL}/${LEETCODE_USERNAME}/solved`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${BASE_URL}/${LEETCODE_USERNAME}/calendar`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${BASE_URL}/${LEETCODE_USERNAME}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!solvedRes.ok || !calendarRes.ok || !profileRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LeetCode stats" },
        { status: 502 }
      );
    }

    const [solved, calendar, profile] = await Promise.all([
      solvedRes.json(),
      calendarRes.json(),
      profileRes.json(),
    ]);

    // Parse the submission calendar string into an object
    let submissionCalendar: Record<string, number> = {};
    try {
      submissionCalendar =
        typeof calendar.submissionCalendar === "string"
          ? JSON.parse(calendar.submissionCalendar)
          : calendar.submissionCalendar || {};
    } catch {
      submissionCalendar = {};
    }

    // Compose a unified response
    const data = {
      status: "success",
      totalSolved: solved.solvedProblem || 0,
      easySolved: solved.easySolved || 0,
      mediumSolved: solved.mediumSolved || 0,
      hardSolved: solved.hardSolved || 0,
      totalEasy: 867,
      totalMedium: 1830,
      totalHard: 796,
      ranking: profile.ranking || 0,
      streak: calendar.streak || 0,
      totalActiveDays: calendar.totalActiveDays || 0,
      submissionCalendar,
    };

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch LeetCode stats" },
      { status: 500 }
    );
  }
}
