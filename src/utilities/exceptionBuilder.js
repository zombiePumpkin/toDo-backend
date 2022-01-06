export function ReqException(error) {
  return {
    error: {
      name: error.name,
      message: error.message,
      reqPath: error.path,
      reqPathVal: error.value,
      reqPathValType: error.valueType,
    },
  }
}

export function NullException(field) {
  return {
    error: {
      name: 'NullField',
      message: `The required field ${field} is null`,
      reqField: field,
      reqFieldVal: typeof field,
      reqFieldValType: typeof field,
    },
  }
}

export function NotFoundException(param) {
  return {
    error: {
      name: 'NotFound',
      message: `The param ${param} returns a empty object`,
      reqField: param,
      reqFieldVal: typeof param,
      reqFieldValType: typeof param,
    },
  }
}
