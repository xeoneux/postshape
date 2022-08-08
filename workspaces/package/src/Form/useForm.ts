import { useState, useEffect, SetStateAction } from "react";
import { FormState, FormError } from "./FormProvider";

export type FormValidateFn<T, E> = (value: T, setError: (error: FormError<E> | null) => void) => void;

export type UseFormProps<T, E> = {
  initial: T;
  validate?: FormValidateFn<T, E>;
};

const getDiffStateProps = <T extends Record<string, any>>(a: T, b: T) => {
  const keys = Object.keys(a);
  const diff: Record<string, any> = {};

  for (const key of keys) {
    if (a[key] !== b[key]) {
      diff[key] = true;
    }
  }

  return diff;
};

const useForm = <T extends Record<string, any>, E = string>({
  initial,
  validate,
}: UseFormProps<T, E>): FormState<T, E> => {
  const [isDirty, setIsDirty] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Partial<Record<keyof T, true>>>({});
  const [state, setState] = useState<T>(initial);
  const [error, setError] = useState<FormError<E>>({});

  const getIsDirty = (field?: keyof T) => {
    if (!field) {
      return Object.values(dirtyFields).some(Boolean);
    }

    return isDirty || !!dirtyFields[field];
  };

  const reset = () => {
    setState(initial);
    setIsDirty(false);
    setHasSubmitted(false);
    setDirtyFields({});
  };

  const handleSetState = (setStateAction: SetStateAction<T>) => {
    setState((prevState) => {
      const nextState = typeof setStateAction === 'function'
        ? (setStateAction as any)(prevState)
        : setStateAction;

      const dirtyFields = getDiffStateProps(nextState, prevState);

      setDirtyFields((prevDirtyFields) => ({
        ...prevDirtyFields,
        ...dirtyFields,
      }));

      return nextState;
    });
  };

  const handleSetError = (error: FormError<E> | null) => {
    if (error) {
      setError(error);
    } else {
      setError({});
    }
  };

  const setDirty = (field: keyof T) => {
    setDirtyFields((f) => ({ ...f, [field]: true }));
  };

  const setSubmitted = () => {
    if (validate) {
      validate(state, handleSetError);
    }

    setIsDirty(true);
    setHasSubmitted(true);
  };

  useEffect(() => {
    if (initial) {
      reset();
    }
  }, [initial]);

  useEffect(() => {
    if (validate) {
      validate(state, handleSetError);
    } else {
      setError({});
    }
  }, [validate, setError, state]);

  return {
    error,
    getIsDirty,
    hasError: Object.keys(error).length > 0,
    hasSubmitted,
    state,
    setDirty,
    setError: handleSetError,
    setState: handleSetState,
    setSubmitted,
    reset,
  };
};

export default useForm;
