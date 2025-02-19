import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.essentiallabinc.com/'),
  alternates:{
    canonical: '/terms',
  },
  title: "Terms and Conditions | Essential Laboratory Inc",
  description: "Read our terms and conditions for using Essential Laboratory Inc's website and services.",
  keywords: "Essential Labs, Terms, Conditions",
  openGraph: {
    title: "Terms and Conditions | Essential Laboratory Inc",
    description: "Read our terms and conditions for using Essential Laboratory Inc's website and services.",
    type: "website",
    url: "https://essentiallabinc.com/terms",
    siteName: "Essential Laboratory Inc",
    images:[  
      {
        url: "https://www.essentiallabinc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Laboratory Inc"
      }
    ]
  }
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose max-w-none">
        <p className="font-bold">
          PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE. By accessing and using this
          Site, you signify your agreement to these Terms; all policies and all changes or modifications to the site in
          the future. If you do not agree to these Terms, do not use this Site.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Modifications to Site</h2>
        <p>
          Essential Lab Inc, a California limited liability company, ("ELI") may modify its site, as well as these Terms
          at any time. You agree to review the Site and these Terms periodically to be aware of such modifications and
          your continued access or use of the Site shall be deemed your conclusive acceptance of the modified Terms.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Copyright/Trademark</h2>
        <p>
          This Site is copyright protected. Any and all copyrighted and copyrightable materials, including but not
          limited to, any textual or graphic material you copy, print, or download is licensed to you by Essential Lab
          Inc and/or its subsidiaries for your personal, non-commercial home use only, provided that you do not change
          or delete any copyright, trademark or other proprietary notices. All trademarks and logos are owned by
          Essential Lab Inc or its licensors and you may not copy or use them in any manner. Nothing contained on this
          Site is to be construed as granting, by implication, estoppel, or otherwise, any license or right of use of
          any such copyright or trademark without the prior written permission of Essential Lab Inc or its licensors.
          You may not modify the materials at this Site in any way or reproduce or publicly display, perform, or
          distribute or otherwise use them for any public or commercial purpose. Essential Lab Inc logo as well as any
          proprietary information contained on this site are either trademarks or registered trademarks of Essential Lab
          Inc or its licensors, and may not be copied, imitated or used, in whole or in part, without the prior written
          permission of Essential Lab Inc. In addition, all page headers, custom graphics, icons and scripts are service
          marks, trademarks and/or trade dress of Essential Lab Inc, and may not be copied, imitated or used, in whole
          or in part, without the prior written permission of Essential Lab Inc. All other trademarks, registered
          trademarks, product names and company names or logos mentioned herein are the property of their respective
          owners.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Links to Other Sites</h2>
        <p>
          Links to external sites or resources of third parties that are contained on this site are provided for your
          convenience only and the inclusion of any link does not imply affiliation, endorsement, or adoption by
          Essential Lab Inc of the site or information contained therein. In addition, to the extent that a third party
          has a link to Essential Lab Inc site on their website, this should not imply that Essential Lab Inc endorses
          that third party or any content thereon. When leaving the Essential Lab Inc site these terms and conditions no
          longer apply and you should review the applicable terms and conditions of that new site.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Customer Communications</h2>
        <p>
          Should you provide Essential Lab Inc with information including feedback data, such as questions, comments,
          suggestions, or the like regarding the Site, or the content of any item, such information shall be deemed to
          be non-confidential and Essential Lab Inc shall have no obligation of any kind with respect to such
          information. In addition, Essential Lab Inc shall be free to reproduce, use, disclose, display, exhibit,
          transmit, and distribute the information to others without limitation. Further, Essential Lab Inc shall be
          free to use any ideas, concepts, know-how or techniques contained in such information for any purpose
          whatsoever, including, but not limited to, developing, manufacturing and marketing products and other items
          incorporating such information. This paragraph is not intended to apply to any of your personal information.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Choice of Law and Jurisdiction</h2>
        <p>
          This Site is controlled and operated by Essential Lab Inc from its offices within the State of California,
          United States of America. These Terms shall be governed and construed in accordance with the laws of the State
          of California. You agree that any legal action or proceeding between Essential Lab Inc and you for any purpose
          concerning these Terms or the parties' obligations hereunder shall be brought exclusively in a federal or
          state court of competent jurisdiction in the State of California. Any cause of action or claim you may have
          with respect to the Site must be commenced within one (1) year after the claim or cause of action arises or
          such claim or cause of action is barred. Essential Lab Inc failure to insist upon, or enforce strict
          performance of, any provision of these Terms shall not be construed as a waiver. Neither the course of conduct
          between the parties nor trade practice shall act to modify any provision of these Terms. Essential Lab Inc
          makes no representation that materials in the Site are appropriate or available for use in other locations.
          Those who choose to access this Site from other locations do so on their own initiative and are responsible
          for compliance with local laws, if and to the extent local laws are applicable.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Software</h2>
        <p>
          Software from this Site is subject to U.S. export controls. No software from this Site may be downloaded or
          otherwise exported or re-exported into (or to a national or resident of) any country to which the U.S. has
          embargoed goods or to anyone on the U.S. Treasury Department's list of Specially Designated National or the
          U.S. Commerce Department's Table of Deny Orders. By downloading or using the software, you represent and
          warrant that you are not located in, under the control of, or a national or resident of any such country or on
          any such list.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Site Disclaimer/Limited Warranties</h2>
        <p>
          THE MATERIALS IN THIS SITE ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED,
          INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY. Essential Lab Inc DOES NOT WARRANT OR MAKE ANY
          REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE CONTENT OR OTHER MATERIALS IN THIS SITE IN
          TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. Essential Lab Inc DOES NOT WARRANT THAT THE
          FUNCTIONS CONTAINED IN THE MATERIALS AVAILABLE ON THIS SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS
          WILL BE CORRECTED, OR THAT THE MATERIALS, THIS SITE, OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF
          VIRUSES OR OTHER HARMFUL COMPONENTS. YOU (AND NOT Essential Lab Inc) ASSUME THE ENTIRE COST OF ALL NECESSARY
          SERVICING, REPAIR AND CORRECTION. UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL
          Essential Lab Inc OR ITS OFFICERS, DIRECTORS, SHAREHOLDERS, OR EMPLOYEES BE LIABLE FOR ANY SPECIAL OR
          CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE OR ANY DOWNLOADED
          MATERIALS, EVEN IF Essential Lab Inc OR ITS REPRESENTATIVE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES. IN NO EVENT SHALL Essential Lab Inc TOTAL LIABILITY TO YOU FROM ALL DAMAGES, LOSSES, AND CAUSES OF
          ACTION (WHETHER IN CONTRACT, OR OTHERWISE) EXCEED THE AMOUNT YOU PAID TO MOPEC, IF ANY, FOR PRODUCTS PURCHASED
          ON THIS SITE. APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THESE EXCLUSIONS MAY NOT
          APPLY TO YOU.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Accuracy and Contents</h2>
        <p>
          Essential Lab Inc does not warrant the accuracy, completeness or usefulness of the information contained on
          this Site. The materials available on this Site may include technical inaccuracies or typographical errors.
          Changes may be made from time to time without notice. It is solely your responsibility to evaluate the
          accuracy, completeness and usefulness of all opinions, advice, services, merchandise and other information
          provided through the Site. Essential Lab Inc may make changes to the materials at this Site, or to the
          products and prices described in them, at any time without notice. Information published at this Site may
          refer to products, programs or services that are not available in your State or country. Consult your local
          Essential Lab Inc sales representative for information regarding the products, programs and services that may
          be available to you. All orders are subject to acceptance by Essential Lab Inc.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Indemnification</h2>
        <p>
          You agree to indemnify, defend and hold Essential Lab Inc, its officers, directors, employees, agents,
          affiliates, licensors, and suppliers harmless from and against all losses, expenses, damages and costs,
          including reasonable attorneys fees, resulting from any violation of these Terms by you.
        </p>

        <h2 className="mt-5 text-2xl font-extrabold">Termination of Use</h2>
        <p>
          If you breach any of these Terms, your authorization to use this Site automatically terminates. You may
          terminate this Agreement at any time by no longer using this Site, provided that all prior uses of this Site
          shall be governed by this Agreement. Essential Lab Inc may terminate this Agreement at any time, without
          notice, and accordingly deny you future access to this Site, at Essential Lab Inc sole discretion for any
          reason, including your failure to comply with any term or provision of this Agreement. Upon any termination of
          this Agreement by either you or Essential Lab Inc, you must promptly destroy all materials downloaded or
          otherwise obtained from this Site, as well as all copies of such materials, whether made under the terms of
          this Agreement or otherwise.
        </p>
      </div>
    </div>
  )
}

