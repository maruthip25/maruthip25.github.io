import React from 'react';
import ReactDOM from 'react-dom';
import style from './projects.css';

export default class Projects extends React.Component{
  constructor(props){
    super(props);

  };
  render(){
    const projects = this.props.items.map((item)=>
    <div className="project" key={item.id}>
      <div className="project-left">
        <a href={item.href} target="_blank"><h2 style={item.accent}>{item.title}</h2></a>
        <h4>{item.type}</h4>
        {
          item.glyphClasses.map((glyph)=>
          <div className="project-techs" key={glyph.id}>
            <i title={glyph.name} className={glyph.className}></i>
            {glyph.name}
          </div>
        )
        }
        <p>{item.desc}</p>
        <a className="project-link" href={item.href} target="_blank">Visit Site &nbsp; &rarr;</a>
      </div>
      <div className="project-right">
        <div className="project-mockup"><img src={item.mockup} /></div>
      </div>
    </div>
    );
    return(
      <div className="projects">
        {projects}
      </div>
    );
  };
}
