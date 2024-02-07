/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ActionLogCreateFormInputValues = {
    target?: string;
    action?: string;
    timestamp?: number;
};
export declare type ActionLogCreateFormValidationValues = {
    target?: ValidationFunction<string>;
    action?: ValidationFunction<string>;
    timestamp?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionLogCreateFormOverridesProps = {
    ActionLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    target?: PrimitiveOverrideProps<TextFieldProps>;
    action?: PrimitiveOverrideProps<SelectFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionLogCreateFormProps = React.PropsWithChildren<{
    overrides?: ActionLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActionLogCreateFormInputValues) => ActionLogCreateFormInputValues;
    onSuccess?: (fields: ActionLogCreateFormInputValues) => void;
    onError?: (fields: ActionLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionLogCreateFormInputValues) => ActionLogCreateFormInputValues;
    onValidate?: ActionLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActionLogCreateForm(props: ActionLogCreateFormProps): React.ReactElement;
