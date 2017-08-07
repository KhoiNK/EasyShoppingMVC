﻿using EasyShopping.Constants;
using System.Web;
using System.Web.Optimization;

namespace EasyShopping.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            const string LibPath = "~/Scripts/lib/",
                AppPath = "~/Scripts/Ang2/",
                StylePath = "~/Content/";

            bundles.Add(new ScriptBundle(ViewConstants.LibBundle).Include(
                LibPath + "jquery-{version}.js",
                LibPath + "modernizr-*",
                LibPath + "bootstrap.js",
                LibPath + "respond.js",
                LibPath + "summernote*",
                LibPath + "slick.min.js"
            ));

            bundles.Add(new ScriptBundle(ViewConstants.AppBundle).Include(
                AppPath + "node_modules/core-js/client/shim.min.js",
                AppPath + "node_modules/zone.js/dist/zone.js",
                AppPath + "node_modules/systemjs/dist/system.src.js",
                //AppPath + "dist/systemjs-angular-loader.js",
                AppPath + "dist/systemjs.config.js" // Lazy loading JS files.
            ));

            bundles.Add(new StyleBundle(ViewConstants.CssBundle).Include(
                StylePath + "lib/bootstrap.css",
                StylePath + "css/font-awesome.css",
                StylePath + "css/animate.css",
                StylePath + "css/main.css",
                StylePath + "css/prettyPhoto.css",
                StylePath + "css/responsive.css",
                StylePath + "css/summernote.css",
                StylePath + "slick.css"
            ));
        }
    }
}
