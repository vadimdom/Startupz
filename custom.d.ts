  declare module "*.svg" {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    declare const src: string;
  
    export default src;
  }
