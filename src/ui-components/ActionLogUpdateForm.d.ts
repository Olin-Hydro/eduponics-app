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
export declare type ActionLogUpdateFormInputValues = {
    target?: string;
    action?: string;
    timestamp?: number;
};
export declare type ActionLogUpdateFormValidationValues = {
    target?: ValidationFunction<string>;
    action?: ValidationFunction<string>;
    timestamp?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionLogUpdateFormOverridesProps = {
    ActionLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    target?: PrimitiveOverrideProps<TextFieldProps>;
    action?: PrimitiveOverrideProps<SelectFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActionLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    actionLog?: any;
    onSubmit?: (fields: ActionLogUpdateFormInputValues) => ActionLogUpdateFormInputValues;
    onSuccess?: (fields: ActionLogUpdateFormInputValues) => void;
    onError?: (fields: ActionLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionLogUpdateFormInputValues) => ActionLogUpdateFormInputValues;
    onValidate?: ActionLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActionLogUpdateForm(props: ActionLogUpdateFormProps): React.ReactElement;
