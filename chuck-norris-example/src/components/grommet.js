
import { Grommet } from "grommet";
import * as React from "react";

const withGrommet = (WrappedComponent) => {
    return class extends React.Component {
        render () {
            return (<Grommet plain><WrappedComponent {...this.props}></WrappedComponent></Grommet>);
        }
    };
};
export default withGrommet;
