/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SensorLogUpdateFormInputValues = {
    target?: string;
    value?: number;
    timestamp?: number;
};
export declare type SensorLogUpdateFormValidationValues = {
    target?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    timestamp?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SensorLogUpdateFormOverridesProps = {
    SensorLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    target?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SensorLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: SensorLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sensorLog?: any;
    onSubmit?: (fields: SensorLogUpdateFormInputValues) => SensorLogUpdateFormInputValues;
    onSuccess?: (fields: SensorLogUpdateFormInputValues) => void;
    onError?: (fields: SensorLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SensorLogUpdateFormInputValues) => SensorLogUpdateFormInputValues;
    onValidate?: SensorLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SensorLogUpdateForm(props: SensorLogUpdateFormProps): React.ReactElement;
