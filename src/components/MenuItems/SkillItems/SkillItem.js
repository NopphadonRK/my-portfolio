import "./SkillItem.css";

function SkillItem(props) {
    const {skill} = props;
    return(
        <div className="SkillItem">
            <img src={skill.imgSrc} width="144px" alt="img-skill"/>
            <label>{skill.skillName}</label>
        </div>
    );
}

export default SkillItem;