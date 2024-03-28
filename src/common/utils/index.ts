import moment from "moment";
import { ProjectDetails, SourceFieldCandidate } from "../../api";

export const camelCaseToCapitalizedSentence = (str: string): string => {
  const words = str.split(/(?=[A-Z])/);
  const capitalizedString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedString;
};

export const scrollTop = (elementId: string | undefined = undefined) => {
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const getScrollParent = (
  node: HTMLElement | undefined,
  done = false
): HTMLElement => {
  if (!node) {
    return document.body;
  }

  if (done) {
    return node;
  } else if (node.scrollHeight >= node.clientHeight) {
    return getScrollParent(
      getScrollParent(node.parentNode as HTMLElement, true)
        .parentNode as HTMLElement,
      true
    );
  } else {
    return getScrollParent(node.parentNode as HTMLElement);
  }
};

export function _resolve(path: any, obj: any, separator = ".") {
  const properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev: any, curr: any) => prev && prev[curr], obj);
}

export const isSecondaryField = (
  projectDetails: ProjectDetails,
  record: SourceFieldCandidate
) => {
  const secondary = projectDetails?.secondaryUniqueFields || [];
  const mapped = record.mapping?.destinationFieldName || "";
  return secondary.includes(mapped);
};

export const isRecordIdField = (
  recordIdField: string,
  record: SourceFieldCandidate
) => {
  const mapped = record.mapping?.destinationFieldName || "";
  return mapped === recordIdField;
};

export const isDateTimeField = (textValidation: string) => {
  return [
    "date_mdy",
    "date_dmy",
    "date_ymd",
    "datetime_mdy",
    "datetime_dmy",
    "datetime_ymd",
    "datetime_seconds_mdy",
    "datetime_seconds_dmy",
    "datetime_seconds_ymd",
    "time",
  ].includes(textValidation);
};

export function isValueValid(value: any, validation: any, required = false) {
  const { fieldType, textValidation, textValidationMin, textValidationMax } =
    validation;

  if (required && (!value || value.length === 0)) {
    return false;
  }

  let valid = true;
  if (textValidation === "number" && fieldType === "slider") {
    const integerRegex = /^[-+]?\d+$/;
    if (integerRegex.test(value)) {
      const parsedValue = parseInt(value, 10);
      if (parsedValue < 0 || parsedValue > 100) {
        valid = false;
      }
    } else {
      valid = false;
    }
  } else if (textValidation === "integer") {
    // https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits/1779019
    const integerRegex = /^[-+]?\d+$/;
    if (integerRegex.test(value)) {
      const parsedValue = parseInt(value, 10);
      if (
        (textValidationMin && parsedValue < parseInt(textValidationMin, 10)) ||
        (textValidationMax && parsedValue > parseInt(textValidationMax, 10))
      ) {
        valid = false;
      }
    } else {
      valid = false;
    }
  } else if (textValidation === "number_2dp") {
    // https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits/1779019
    const decimalRegex = /^[-+]?\d+\.[0-9]{2}$/;
    if (decimalRegex.test(value)) {
      const parsedValue = parseFloat(value);
      if (
        (textValidationMin && parsedValue < parseFloat(textValidationMin)) ||
        (textValidationMax && parsedValue > parseFloat(textValidationMax))
      ) {
        valid = false;
      }
    } else {
      valid = false;
    }
  } else if (textValidation === "alpha_only") {
    const alphaOnlyRegex = /^[A-Za-z]+$/;
    if (!alphaOnlyRegex.test(value)) {
      valid = false;
    }
  } else if (textValidation === "email") {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(value).toLowerCase())) {
      valid = false;
    }
  } else if (textValidation === "mrn_10d") {
    if (value && value.length !== 10) {
      valid = false;
    }
  } else if (textValidation === "phone") {
    const phoneRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
    if (!phoneRegex.test(value)) {
      try {
        const str = value.replace(/\D/g, "");
        if (str.length !== 10) {
          valid = false;
        }
      } catch (error) {
        valid = false;
      }
    }
  } else if (textValidation === "ssn") {
    const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
    if (!ssnRegex.test(value)) {
      valid = false;
    }
  } else if (textValidation === "zipcode") {
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(value)) {
      valid = false;
    }
  }

  return valid;
}

export function disabledDate(validation: any, current: any) {
  const { textValidationMin, textValidationMax } = validation;
  let disabled = false;
  if (
    (textValidationMin && current < moment(textValidationMin)) ||
    (textValidationMax && current > moment(textValidationMax))
  ) {
    disabled = true;
  }

  return disabled;
}

export function disabledTimeHours(validation: any) {
  let { textValidationMin, textValidationMax } = validation;
  textValidationMax = textValidationMax.split(":")[0];
  textValidationMin = textValidationMin.split(":")[0];
  const disabled: number[] = [];

  for (let i = textValidationMax; i <= 23; i++) {
    disabled.push(i);
  }

  for (let j = textValidationMin; j >= 0; j--) {
    disabled.push(j);
  }

  return disabled;
}

export function disabledTimeMinutes(validation: any, current: any) {
  let { textValidationMin, textValidationMax } = validation;
  const maxHour = textValidationMax.split(":")[0];
  const minHour = textValidationMin.split(":")[0];

  textValidationMax = textValidationMax.split(":")[1];
  textValidationMin = textValidationMin.split(":")[1];
  const disabled = [];

  if (current >= maxHour) {
    for (let i = textValidationMax; i <= 59; i++) {
      disabled.push(i);
    }
  }

  if (current <= minHour) {
    for (let j = textValidationMin; j >= 0; j--) {
      disabled.push(j);
    }
  }

  return disabled;
}

export const parseFormName = (formName: string) => {
  const words = formName.split("_");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

export const parseIdentifier = (identifierDict: any): any | undefined => {
  if (!!identifierDict) {
    let stringIdentifier = "";
    for (const fieldName of Object.keys(identifierDict)) {
      stringIdentifier = `${stringIdentifier} ${fieldName}: ${identifierDict[fieldName]}`;
    }
    return stringIdentifier.trim();
  } else {
    return undefined;
  }
};
