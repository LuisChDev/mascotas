const constants: {
  api: string
} = {
  api: process.env.REACT_APP_API_URL || "error: variable 'REACT_APP_API_URL' not found"
}

export default constants;
