// Type definitions for puppeteer
// Project: https://github.com/GoogleChrome/puppeteer
// Definitions by: George Theofilis <https://github.com/theofilis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Puppeteer {
  interface PuppeteerStatic {
    launch (options?: LaunchOptions): Promise<Browser>;
    connect (options?: ConnectOptions): Promise<Browser>;
  }

  export interface ConnectOptions {
    browserWSEndpoint?: string;
    ignoreHTTPSErrors?: boolean;
  }

  export interface LaunchOptions {
    ignoreHTTPSErrors?: boolean;
    headless?: boolean;
    executablePath?: string;
    slowMo?: number;
    args?: Array<string>;
    handleSIGINT?: boolean;
    timeout?: number;
    dumpio?: boolean;
    userDataDir?: string;
  }

  export interface PageClickOptions {
    button?: string;
    clickCount?: number;
    delay?: number;
  }

  export interface PageCookie {
    name: string;
    value?: string;
    url?: string;
    domain?: string;
    path?: string;
    expires?: number;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: string;
  }

  export interface PageNavigationOptions {
    timeout?: number;
    waitUntil?: string;
    networkIdleInflight?: number;
    networkIdleTimeout?: number;
  }

  export interface PagePdfOptions {
    path?: string;
    scale?: number;
    displayHeaderFooter?: boolean;
    printBackground?: boolean;
    landscape?: boolean;
    pageRanges?: string;
    format?: string;
    width?: string;
    height?: string;
    margin?: { [key: string]: string };
  }

  export interface PageScreenshotOptions {
    path?: string;
    type?: string;
    quality?: number;
    fullPage?: boolean;
    clip?: { [key: string]: number };
    omitBackground?: boolean;
  }

  export interface PageViewport {
    width?: number;
    height?: number;
    deviceScaleFactor?: number;
    isMobile?: boolean;
    hasTouch?: boolean;
    isLandscape?: boolean;
  }

  export class Browser {
    close (): void;

    newPage (): Promise<Page>;

    version (): Promise<string>;

    wsEndpoint (): string;
  }

  export class Page extends events.EventEmitter {
    $ (selector: string): Promise<ElementHandle>;

    $$ (selector: string): Promise<Array<ElementHandle>>;

    $eval (selector: string, pageFunction: Function, args?: Array<any>): Promise<any>;

    addScriptTag (url: string): Promise<any>;

    click (selector: string, options?: PageClickOptions): Promise<any>;

    close (): Promise<any>;

    content (): Promise<string>;

    cookie (urls: Array<string>): Promise<Array<PageCookie>>;

    deleteCookie (cookies: Array<PageCookie>): Promise<any>;

    evaluate (pageFunction: Function, args?: Array<any>): Promise<any>;

    focus (selector: string): Promise<any>;

    goto (url: string, options?: PageNavigationOptions): void;

    hover (selector: string): Promise<any>;

    pdf (options?: PagePdfOptions): Promise<Buffer>;

    reload (options?: PageNavigationOptions): Promise<any>;

    screenshot (options?: PageScreenshotOptions): Promise<Buffer>;

    setContent (html: string): Promise<any>;

    setCookie (cookies: Array<PageCookie>): Promise<any>;

    setUserAgent (userAgent: string): Promise<any>;

    setViewport (viewport: PageViewport): Promise<any>;

    title (): Promise<string>;

    url (): Promise<string>;
  }

  export class ElementHandle {

  }
}

declare const puppeteer: Puppeteer.PuppeteerStatic;

declare module "puppeteer" {
  export = puppeteer;
}
