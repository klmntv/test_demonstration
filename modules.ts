declare module "*.scss" {
  const content: { [key: string]: any }
  export = content
}
declare module "*.css" {
  const content: { [key: string]: any }
  export = content
}
declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
