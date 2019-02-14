// Type definitions for jsdoc-to-markdown 4.0
// Project: https://github.com/jsdoc2md/jsdoc-to-markdown
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare enum StyleListFormat { "none", "grouped", "table", "dl" }
declare enum RenderListFormat { "list", "table" }
declare enum MemberIndexFormat { "grouped", "list" }

interface RenderOptions {
    data: object[];
    template?: string;
    headingDepth?: number;
    exampleLang?: string;
    plugin?: string|string[];
    helper?: string|string[];
    partial?: string|string[];
    nameFormat?: string;
    noGfm?: boolean;
    seperators?: boolean;
    moduleIndexFormat?: StyleListFormat;
    globalIndexFormat?: StyleListFormat;
    paramListFormat?: RenderListFormat;
    propertyListFormat?: RenderListFormat;
    memberIndexFormat?: MemberIndexFormat;
}

interface JsdocOptions {
    noCache: boolean;
    files: string|string[];
    source: string;
    configure: string;
}

export default class JsdocToMarkdown {
    render(options: RenderOptions): Promise<string>;
    renderSync(options: RenderOptions): string;
    getTemplateData(options: JsdocOptions): Promise<object[]>;
    getTemplateDataSync(options: JsdocOptions): object[];
    getJsdocData(options: JsdocOptions): Promise<object[]>;
    getJsdocDataSync(options: JsdocOptions): object[];
    clear(): Promise<void>;
    getNamepaths(options: JsdocOptions): Promise<object>;
}
