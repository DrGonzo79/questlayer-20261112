import type {NextConfig} from "next";
const repo="questlayer-20261112";
const isPages=process.env.PAGES_BUILD==="true";
const config:NextConfig={output:"export",trailingSlash:true,basePath:isPages?`/${repo}`:"",assetPrefix:isPages?`/${repo}/`:undefined,images:{unoptimized:true}};
export default config;
