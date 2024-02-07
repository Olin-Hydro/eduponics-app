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
export declare type SensorLogCreateFormInputValues = {
    target?: string;
    value?: number;
    timestamp?: number;
};
export declare type SensorLogCreateFormValidationValues = {
    target?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    timestamp?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SensorLogCreateFormOverridesProps = {
    SensorLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    target?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SensorLogCreateFormProps = React.PropsWithChildren<{
    overrides?: SensorLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SensorLogCreateFormInputValues) => SensorLogCreateFormInputValues;
    onSuccess?: (fields: SensorLogCreateFormInputValues) => void;
    onError?: (fields: SensorLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SensorLogCreateFormInputValues) => SensorLogCreateFormInputValues;
    onValidate?: SensorLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function SensorLogCreateForm(props: SensorLogCreateFormProps): React.ReactElement;
