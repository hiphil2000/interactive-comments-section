import { IComponentBase } from "../../interfaces";
import { BreakpointType } from "../../../libs/theme";
import { SerializedStyles } from "@emotion/react";

export interface IMediaProps extends IComponentBase {
	breakpoint: BreakpointType;
	mediaStyle?: SerializedStyles;
}
