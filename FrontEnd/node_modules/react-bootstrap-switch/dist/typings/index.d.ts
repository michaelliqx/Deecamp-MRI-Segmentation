import * as React from 'react';

export interface SwitchPropTypes {
	baseClass?:      string;
	wrapperClass?:   string;
	bsSize?:         string;

	handleWidth?:    (string | number);
	labelWidth?:     (string | number);

	onColor?:        string;
	offColor?:       string;

	onText?:         any; // PropTypes.node?,
	offText?:        any;
	labelText?:      any;

	inverse?:        boolean;
	animate?:        boolean;

	disabled?:       boolean;
	readonly?:       boolean;

	tristate?:       boolean;
	defaultValue?:   (boolean | null);
	value?:          (boolean | null);
	onChange:       (component: any, enabled: boolean | null) => void
}

export default class Switch extends React.Component<SwitchPropTypes, {}> {
    constructor(props: SwitchPropTypes);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    value(newVal?: boolean | null): (boolean | null);
}