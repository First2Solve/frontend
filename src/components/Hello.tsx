import * as React from 'react';
import '../styles/Hello.scss';
const sample = require('../assets/sample.png');

export interface HelloProps { 
  compiler: string; 
  framework: string; 
}

// Stateless component
// export const Hello = (props: HelloProps) =>
//   <h1>Hello from { props.compiler } and { props.framework }!</h1>;

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>
      <h1>Hellox, from { this.props.compiler } and { this.props.framework }!</h1>
      <img src={ sample } />
    </div>;
  }
}