'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Brain,
  Code2,
  Database,
  Layout,
  Palette,
  Rocket,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    name: 'C Programming',
    description: 'Procedural programming with focus on system-level operations',
    icon: Code2,
    proficiency: 90,
  },
  {
    name: 'C++ Programming',
    description: 'Object-oriented programming with modern C++ features',
    icon: Code2,
    proficiency: 85,
  },
  {
    name: 'Python',
    description: 'Versatile programming for web, automation, and data science',
    icon: Code2,
    proficiency: 88,
  },
  {
    name: 'Java',
    description: 'Enterprise-grade object-oriented programming platform',
    icon: Code2,
    proficiency: 82,
  },
];

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-24 sm:py-32 relative'
      aria-labelledby='about-heading'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute right-1/4 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl'></div>
        <div className='absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl'></div>
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'>
          <span className='inline-block mb-2 font-medium text-primary animate-text-color'>
            Get to know me
          </span>
          <h2
            id='about-heading'
            className='text-3xl font-bold tracking-tight sm:text-4xl animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200'>
            About
          </h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Image column */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end'>
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay z-10 animate-gradient-shift'></div>
              <Image
                src='/images/image.png'
                alt='Sherin Afrin Mim'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div className='absolute inset-0 border-2 border-accent/30 rounded-2xl animate-border-glow'></div>
            </div>
          </div>

          {/* Bio content column */}
          <div className='lg:col-span-7'>
            <h3 className='text-2xl font-bold mb-4'>
              A CSE 4th Year Student and aspiring Frontend Developer
            </h3>
            <p className='text-muted-foreground mb-6'>
              I'm Mim, a passionate student with the dream of becoming a
              professional web developer. I am currently in my 4th year of
              Computer Science and Engineering (CSE) at Metropolitan University,
              Bangladesh and have been working on my skills in web development
              for the past 3 years. I have a strong foundation in C, C++,Python
              and Java, and I have also been learning and working with Machine
              Learning and Data Science.
            </p>
            {/* Timeline highlights */}
            <div className='space-y-3 mb-8'>
              <div className='flex gap-3'>
                <GraduationCap className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                <div>
                  <span className='font-medium'>
                    BSc in Computer Science & Engineering
                  </span>
                  <p className='text-sm text-muted-foreground'>
                    2023 - Present
                  </p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className='flex flex-wrap gap-3'>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                2 Projects Completed
              </Badge>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                student
              </Badge>
              <Badge
                variant='outline'
                className='bg-primary/10 hover:bg-primary/20'>
                Passionate
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className='mt-24'>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-2xl font-bold text-center mb-12'>
            My Expertise
          </motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='space-y-3'>
                  <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors'>
                      <skill.icon
                        className='h-6 w-6 text-primary'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-semibold'>{skill.name}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className='mt-4 space-y-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-medium text-muted-foreground'>
                        Proficiency
                      </span>
                      <span className='text-sm font-semibold text-primary'>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className='w-full h-2 bg-accent/10 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className='h-full bg-gradient-to-r from-primary to-accent rounded-full'
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
