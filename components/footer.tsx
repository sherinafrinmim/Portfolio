import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className='border-t '>
      <div className='mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Developed by Sherin Afrin Mim.
        </div>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost' size='icon' asChild>
            <a
              href='/'
              rel='noopener noreferrer'>
              <Github className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a
              href='/'
              rel='noopener noreferrer'>
              <Linkedin className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <Twitter className='h-4 w-4' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='mailto:sherinafrinmim@gmail.com'>
              <Mail className='h-4 w-4' />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
