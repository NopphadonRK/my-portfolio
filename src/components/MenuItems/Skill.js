import './Skill.css';
import AllSkill from './SkillItems/AllSkills';
import SkillItem from './SkillItems/SkillItem';

function Skill () {
    const skillElements = AllSkill.map((skill, index) => {
        return <SkillItem key={index} skill = {skill}/>;
    });
    return(
        <div className='Skill'>
            <div className='Skill-title'>
                <hr className='Skill-title-line'/>
                <h1 className='Skill-title-h1'>SKILLS</h1>
            </div>
            <div className='Skill-elements'>
                {skillElements}
            </div>
        </div>
    )
}

export default Skill;