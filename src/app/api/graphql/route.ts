import { createYoga, createSchema } from "graphql-yoga";
import { NextRequest } from "next/server";

const schema = createSchema({
  typeDefs: `
    type Profile {
      name: String!
      title: String!
      bio: String!
      skills: [String!]!
    }

    type TechCategory {
      name: String!
      items: [String!]!
    }

    type Query {
      profile: Profile!
      techStack: [TechCategory!]!
    }
  `,
  resolvers: {
    Query: {
      profile: () => ({
        name: "Ripe",
        title: "Full Stack Developer",
        bio: "B.Tech 3rd year student building scalable full-stack applications with TypeScript and cloud-native practices.",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Docker",
          "AWS",
        ],
      }),
      techStack: () => [
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "Backend",
          items: ["Node.js", "NestJS", "Prisma", "GraphQL", "Python"],
        },
        { name: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
        {
          name: "Cloud & DevOps",
          items: ["Docker", "AWS", "Vercel", "Linux", "Git"],
        },
        { name: "Web3", items: ["Solidity", "Hardhat", "Ethers.js"] },
      ],
    },
  },
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export async function GET(request: NextRequest) {
  return yoga.handleRequest(request, {}) as Promise<Response>;
}

export async function POST(request: NextRequest) {
  return yoga.handleRequest(request, {}) as Promise<Response>;
}
