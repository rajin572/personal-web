import React from 'react';
import  { SkillBar } from 'react-skillbars';

const Skills = () => {
    const skills = [
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 90 },
        { type: 'Bootstrap', level: 100 },
        { type: 'Tailwind', level: 100 },
        { type: 'Javascript', level: 90 },
        { type: 'React js', level: 90 },
        { type: 'Node js', level: 50 },
        { type: 'Express js', level: 50 },
        { type: 'MongoDB', level: 80 },
      ];
      const colors = {
        bar: '#006eff',
        title: {
          text: '#000000',
          background: '#fff',
        },
      };
    return (
        <div className=" mt-20">
            <h1 className=" text-5xl font-bold text-center">My Skills</h1>
            <div className='text-center p-10 lg:p-20'>
                <SkillBar skills={skills} height={30} width={'100%'} colors={colors} />
            </div>
        </div>
    );
};

export default Skills;