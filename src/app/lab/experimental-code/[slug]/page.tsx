import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

const experimentalProjects = [
	{
		title: "Typing Speed Tracker",
		slug: "typing-speed-tracker",
		description: "A simple tool to measure real-time typing speed.",
		tags: ["React", "Hooks", "UX"],
		date: "2025-07-30",
		content: `
## Description

This experiment was created to measure the user's typing speed in words per minute.

## Features

- Real-time tracking
- Final score and statistics
- Lightweight and focused UI

## Tech Stack

- React
- TailwindCSS
- Hooks + useEffect
    `,
	},
	{
		title: "Shader Playground",
		slug: "shader-playground",
		description: "A mini WebGL editor for exploring visual and shader effects.",
		tags: ["WebGL", "Canvas", "Graphics"],
		date: "2025-07-30",
		content: `
## Description

A WebGL-based shader editor prototype for testing simple GLSL visual effects.

## What is explored?

- Canvas integration
- Basic fragment shader effects
- Interactive parameters
    `,
	},
	{
		title: "Logic Puzzle Engine",
		slug: "logic-puzzle-engine",
		description: "A prototype for a condition-based logic puzzle system.",
		tags: ["Logic", "Game", "Algorithms"],
		date: "2025-07-30",
		content: `
## Description
A simple logic puzzle engine that allows creating puzzles based on conditions and rules.
## Features
- Define conditions and rules
- Check puzzle validity
- Interactive UI for puzzle solving
## Tech Stack
- React
- Zustand for state management
- Basic algorithm implementation
    `,
	},
];

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return experimentalProjects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = experimentalProjects.find((p) => p.slug === slug);
	return {
		title: project?.title || "Not Found",
		description: project?.description || "",
	};
}

export default async function ExperimentalDetailPage({ params }: Props) {
	const { slug } = await params;
	const project = experimentalProjects.find((p) => p.slug === slug);

	if (!project) return notFound();

	return (
		<main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold">{project.title}</h1>
				<p className="text-muted-foreground">{project.description}</p>
				<div className="flex gap-2 flex-wrap">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="outline">
							{tag}
						</Badge>
					))}
				</div>
			</div>
			<article className="prose prose-neutral dark:prose-invert">
				{project.content.split("\n").map((line, i) => (
					<p key={i}>{line}</p>
				))}
			</article>
		</main>
	);
}
