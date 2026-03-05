import { Github, ExternalLink } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
  title: 'CMM – Cloud Management & Monitoring',
  description:
    'An AI-integrated Azure cloud automation platform that allows users to manage infrastructure operations through a web interface. Supports VM lifecycle management, full resource deletion (VM, disks, NIC, IP), and real-time monitoring with upcoming natural language command execution.',
  tags: [
    'Next.js',
    'TypeScript',
    'Node.js',
    'Azure SDK',
    'Azure ARM',
    'AI / NLP'
  ],
  githubUrl: 'https://github.com/swarupkadam/CMM',
  liveUrl: 'https://github.com/swarupkadam/CMM',
  },
  {
  title: 'U-Tube \– YouTube Downloader',
  description:
    'A full-stack YouTube metadata and downloader application built as a monorepo. Users can paste a video URL to fetch metadata like title, thumbnail, duration, and download videos in the best available quality using a yt-dlp powered backend.',
  tags: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind',
    'Node.js',
    'Express',
    'yt-dlp'
  ],
  githubUrl: 'https://github.com/swarupkadam/U-tube',
  liveUrl: 'https://github.com/swarupkadam/U-tube',
},
  {
  title: 'Adventure Time – 2D RPG Game',
  description:
    'A Java-based 2D top-down action RPG featuring tile-based exploration, combat mechanics, NPC interactions, trading systems, inventory management, and enemy AI with A* pathfinding. Includes a day-night cycle, save/load system, and multiple game states built using Swing and AWT.',
  tags: [
    'Java',
    'Swing',
    'AWT',
    'Game Development',
    'A* Pathfinding',
    'OOP'
  ],
  githubUrl: 'https://github.com/swarupkadam/2D-Game',
  liveUrl: 'https://github.com/swarupkadam/2D-Game',
},
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={playHover}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {'isNew' in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
