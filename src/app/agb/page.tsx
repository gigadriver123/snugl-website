"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50/50">
      {/* Animated SVG Background - Back layers (moving left) */}
      <div 
        className="fixed inset-0 w-full min-h-screen pointer-events-none cloudLayerBack"
      />
      {/* Animated SVG Background - Front layer (moving right) */}
      <div 
        className="fixed inset-0 w-full min-h-screen pointer-events-none cloudLayerFront"
      />
      
      <style jsx global>{`
        .cloudLayerBack {
          background-image: url(/bg_layer_back.svg);
          background-size: 1206px auto;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          z-index: 0;
          animation: moveLeft 100s linear infinite;
        }
        
        .cloudLayerFront {
          background-image: url(/bg_layer_front.svg);
          background-size: 1206px auto;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          z-index: 1;
          animation: moveRight 120s linear infinite;
        }
        
        @keyframes moveLeft {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: -1206px;
          }
        }
        
        @keyframes moveRight {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: 1206px;
          }
        }
      `}</style>

      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-lg shadow-black/5 ring-1 ring-black/5">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/50"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mb-8">
            Updated at 2025-11-25
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">General Terms</h2>
              <p className="leading-relaxed">
                By accessing and placing an order with SNUGL, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and SNUGL.
              </p>
              <p className="leading-relaxed mt-4">
                Under no circumstances shall SNUGL team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if SNUGL team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
              </p>
              <p className="leading-relaxed mt-4">
                SNUGL will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">License</h2>
              <p className="leading-relaxed">
                SNUGL grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app strictly in accordance with the terms of this Agreement.
              </p>
              <p className="leading-relaxed mt-4">
                These Terms & Conditions are a contract between you and SNUGL (referred to in these Terms & Conditions as &quot;SNUGL&quot;, &quot;us&quot;, &quot;we&quot; or &quot;our&quot;), the provider of the SNUGL website and the services accessible from the SNUGL website (which are collectively referred to in these Terms & Conditions as the &quot;SNUGL Service&quot;).
              </p>
              <p className="leading-relaxed mt-4">
                You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the SNUGL Service. In these Terms & Conditions, &quot;you&quot; refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Definitions</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Cookie:</strong> small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</li>
                <li><strong>Company:</strong> when this policy mentions &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; it refers to SNUGL, that is responsible for your information under this Terms & Conditions.</li>
                <li><strong>Country:</strong> where SNUGL or the owners/founders of SNUGL are based, in this case is Germany.</li>
                <li><strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to visit SNUGL and use the services.</li>
                <li><strong>Service:</strong> refers to the service provided by SNUGL as described in the relative terms (if available) and on this platform.</li>
                <li><strong>Third-party service:</strong> refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
                <li><strong>You:</strong> a person or entity that is registered with SNUGL to use the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Restrictions</h2>
              <p className="leading-relaxed mb-4">You agree not to, and you will not permit others to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the app or make the platform available to any third party.</li>
                <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the app.</li>
                <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of SNUGL or its affiliates, partners, suppliers or the licensors of the app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Return and Refund Policy</h2>
              <p className="leading-relaxed">
                Thanks for shopping at SNUGL. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you&apos;re exploring, evaluating, and purchasing our products.
              </p>
              <p className="leading-relaxed mt-4">
                If, for any reason, You are not completely satisfied with any good or service that we provide, don&apos;t hesitate to contact us and we will discuss any of the issues you are going through with our product.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Suggestions</h2>
              <p className="leading-relaxed">
                Any feedback, comments, ideas, improvements or suggestions (collectively, &quot;Suggestions&quot;) provided by you to SNUGL with respect to the app shall remain the sole and exclusive property of SNUGL.
              </p>
              <p className="leading-relaxed mt-4">
                SNUGL shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
