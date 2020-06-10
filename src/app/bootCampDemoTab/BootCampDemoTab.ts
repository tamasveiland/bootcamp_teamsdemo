import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/bootCampDemoTab/index.html")
@PreventIframe("/bootCampDemoTab/config.html")
@PreventIframe("/bootCampDemoTab/remove.html")
export class BootCampDemoTab {
}
