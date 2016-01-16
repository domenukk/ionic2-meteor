import {MeteorProviders} from "angular2-meteor-client"
import {App} from "ionic-framework/ionic";

/**
 * @name MeteorApp
 * @description
 * MeteorApp is an Ionic decorator that bootstraps an application.
 * After being bootstrapped with meteor, Meteor.Collections can be used as usual.
 * See docs for angular2-meteor for more information.
 * It can be passed a number of arguments, that act as global config variables for the app.
 * App can accept a `template` property that has an inline template or a `templateUrl` property that points to an external html template.
 *
 * @usage
 * ```ts
 * import {MeteorApp} from 'ionic2-meteor';
 *
 * @MeteorApp({
*   templateUrl: 'app/app.html'
* })
 *
 * export class MyApp{
*   // Anything we would want to do at the root of our app
* }
 * ```
 *
 * @param {Object} [config] - the app's [../Config](Config) object
 * @param {String} [template] - the template to use for the app root
 * @param {String} [templateUrl] - a relative URL pointing to the template to use for the app root
 *
 */

export function MeteorApp(args: any={}) {
  return function(cls) {
    const providers = [];
    if (args && args.providers) {
      providers.concat(args.providers);
    }
    providers.concat(MeteorProviders);
    args.providers = providers;
    return App(args)(cls);
  }
}
