/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://s.ytimg.com https://www.youtube.com https://www.chatbase.co;
  connect-src 'self' http://localhost:3000 http://localhost:3001 https://app.dynacleanindustries.com https://www.chatbase.co;
  img-src * blob: data:;
  style-src 'self' 'unsafe-inline';
  frame-src https://www.youtube.com https://www.chatbase.co;
`;








const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920],
    minimumCacheTTL: 86400,
    domains: [
      'dynacleanindustries.com',
      'localhost',
      'app.dynacleanindustries.com',
    ],
  },


  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    minify: true, // ✅ Modern minification (replaces swcMinify)
  },

  transpilePackages: [],

  output: 'standalone',



  async headers() {
    return [
      {
        source: '/(.*)', // applies to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },



  // START OF CHANGES: Update this redirects function
  async redirects() {
    return [
      // General Pages
      {
        source: '/about.html',
        destination: '/about',
        permanent: true, // 301 redirect
      },
      {
        source: '/careers.html',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      // Note: 'products.html' and 'service-support.html' were not in your provided file list,
      // so they are kept as is, assuming they exist elsewhere or are placeholders.
      {
        source: '/products.html',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/service-support.html',
        destination: '/service-support',
        permanent: true,
      },
      {
        source: '/blogs.html',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/Apply.html',
        destination: '/apply',
        permanent: true,
      },
      {
        source: '/details.html',
        destination: '/details',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/thank.html',
        destination: '/thank-you',
        permanent: true,
      },
      // Product Categories
      // Note: Many of these 'products-category.html' files were not in your provided list,
      // and it seems the intention is to redirect the main category page.
      // The logic below tries to match general category names.
      {
        source: '/Battery-Operated-Sweeper-Truck.html',
        destination: '/products/battery-operated-sweeper-truck',
        permanent: true,
      },
      {
        source: '/Auto-Scrubber-Drier.html',
        destination: '/products/scrubber-drier',
        permanent: true,
      },
      {
        source: '/Escalator-Cleaner.html',
        destination: '/products/escalator-cleaner',
        permanent: true,
      },
      {
        source: '/High-Pressure-Jet-Washer.html',
        destination: '/products/high-pressure-jet-washer',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck.html', // This was already present, confirming
        destination: '/products/municipal-diesel-sweeper-truck',
        permanent: true,
      },
      {
        source: '/Scooter-Mops.html', // Using Scooter-Mops.html as the category page
        destination: '/products/scooter-mop',
        permanent: true,
      },

      {
        source: '/Single-Disc-Scrubber.html',
        destination: '/products/Single-disc-scrubber',
        permanent: true,
      },
      {
        source: '/Steam-Cleaner.html',
        destination: '/products/steam-cleaner',
        permanent: true,
      },
      {
        source: '/Sweepers.html', // Using Sweepers.html as the category page
        destination: '/products/sweeper',
        permanent: true,
      },
      {
        source: '/Vacuum-Cleaners.html',
        destination: '/products/vacuum-cleaner',
        permanent: true,
      },
      {
        source: '/Garbage-Compactor-Trucks.html',
        destination: '/products/garbage-compactor-trucks',
        permanent: true,
      },
      {
        source: '/Garbage-Tipper-Truck.html', // Assuming this is the category page for tipper trucks
        destination: '/products/garbage-tipper-truck',
        permanent: true,
      },


      // Specific Product Pages
      // Example: products/battery-operated-sweeper-truck/DRS-600.html to /products/battery-operated-sweeper-truck/DRS-600
      {
        source: '/Battery-Operated-Truck-DRS-600.html',
        destination: '/products/battery-operated-sweeper-truck/DRS-600',
        permanent: true,
      },
      {
        source: '/Battery-Operated-Sweeper-Truck-DRS-600-DT.html',
        destination: '/products/battery-operated-sweeper-truck/DRS-600-DT',
        permanent: true,
      },
      // Municipal Sweeper Truck - Specific Models (these are under municipal-diesel-sweeper-truck category)
      {
        source: '/Municipal-Sweeper-Truck-DTMS-1000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-1000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-2000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-2000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-3000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-3000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-4000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-4000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-5000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-5000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-6000.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-6000',
        permanent: true,
      },
      {
        source: '/Municipal-Sweeper-Truck-DTMS-6000-EV.html',
        destination: '/products/municipal-diesel-sweeper-truck/DTMS-6000-EV',
        permanent: true,
      },

      // Escalator Cleaner
      {
        source: '/Escalator-Cleaning-D-510ES.html',
        destination: '/products/escalator-cleaner/D-510ES',
        permanent: true,
      },
      {
        source: '/Escalator-Cleaning-D-T2ES.html',
        destination: '/products/escalator-cleaner/D-T2ES',
        permanent: true,
      },

      // High-Pressure Jet Washer
      {
        source: '/High-Pressure-Jet-Washer-DJB-200.html',
        destination: '/products/high-pressure-jet-washer/DJB-200',
        permanent: true,
      },
      {
        source: '/High-Pressure-Jet-Washer-DJ-200.html',
        destination: '/products/high-pressure-jet-washer/DJ-200',
        permanent: true,
      },
      {
        source: '/High-Pressure-Jet-Washer-DJE-18.html',
        destination: '/products/high-pressure-jet-washer/DJE-18',
        permanent: true,
      },
      {
        source: '/High-Pressure-Jet-Washer-DJE-30.html',
        destination: '/products/high-pressure-jet-washer/DJE-30',
        permanent: true,
      },

      // Scooter Mop
      // Assuming 'Scooter-Mop.html' is a specific product, or if DMS-115P is implied
      {
        source: '/Scooter-Mop.html', // This might need clarification if DMS-115P is the only model
        destination: '/products/scooter-mop/DMS-115P', // Redirecting to a generic scooter mop page if no specific model provided
        permanent: true,
      },

      // Scrubber Drier
      {
        source: '/Auto-Scrubber-Drier-DB-6070T.html',
        destination: '/products/scrubber-drier/DB-6070T',
        permanent: true,
      },
      {
        source: '/Auto-Scrubber-Drier-DB-9050P.html',
        destination: '/products/scrubber-drier/DB-9050P',
        permanent: true,
      },
      {
        source: '/Auto-Scrubber-Drier-DMOP-15P.html',
        destination: '/products/scrubber-drier/DMOP-15P',
        permanent: true,
      },
      {
        source: '/Ride-On-Scrubber-Drier-DRO-100P.html',
        destination: '/products/scrubber-drier/DRO-100P',
        permanent: true,
      },
      {
        source: '/Ride-on-Scrubber-Drier-DRO-100T.html',
        destination: '/products/scrubber-drier/DRO-100T',
        permanent: true,
      },
      {
        source: '/Ride-on-Scrubber-Drier-DRO-200T.html',
        destination: '/products/scrubber-drier/DRO-200T',
        permanent: true,
      },
      {
        source: '/Ride-on-Scrubber-Drier-DRO-8085.html',
        destination: '/products/scrubber-drier/DRO-8085',
        permanent: true,
      },
      {
        source: '/Auto-Scrubber-Drier-DYNA-40.html',
        destination: '/products/scrubber-drier/DYNA-40',
        permanent: true,
      },
      {
        source: '/Ride-On-Scrubber-Drier.html', // Category page for ride-on
        destination: '/products/scrubber-drier/ride-on',
        permanent: true,
      },


      // Single-disc Scrubber
      {
        source: '/Single-Disc-Scrubber-D-15P.html',
        destination: '/products/Single-disc-scrubber/D-15P',
        permanent: true,
      },
      {
        source: '/Single-Disc-Scrubber-D-20P.html',
        destination: '/products/Single-disc-scrubber/D-20P',
        permanent: true,
      },
      {
        source: '/Single-Disc-Scrubber-D25P.html',
        destination: '/products/Single-disc-scrubber/D-25P',
        permanent: true,
      },

      // Steam Cleaner
      {
        source: '/Steam.html', // Assuming this is the specific product page for steam cleaner
        destination: '/products/steam-cleaner/D-Steam2',
        permanent: true,
      },

      // Sweeper
      {
        source: '/DS2-55-Sweeper.html',
        destination: '/products/sweeper/manual-sweeper-DS255',
        permanent: true,
      },
      {
        source: '/DSE-55-Sweeper.html',
        destination: '/products/sweeper/manual-sweeper-DSE55',
        permanent: true,
      },
      {
        source: '/DRS-180T-Sweeper.html',
        destination: '/products/sweeper/ride-on-sweeper-DRS180T',
        permanent: true,
      },
      {
        source: '/DRS-90T-Sweeper.html',
        destination: '/products/sweeper/ride-on-sweeper/DRS90T',
        permanent: true,
      },

      // Vacuum Cleaner
      {
        source: '/Back-Pack-Vacuum-Cleaner.html',
        destination: '/products/vacuum-cleaner/back-pack-DBP6', // Assuming Back-Pack-Vacuum-Cleaner.html corresponds to DBP6
        permanent: true,
      },
      {
        source: '/Vacuum-Cleaners-DV-15.html',
        destination: '/products/vacuum-cleaner/dv-15',
        permanent: true,
      },
      {
        source: '/Vacuum-Cleaners-DV-30.html',
        destination: '/products/vacuum-cleaner/dv-30',
        permanent: true,
      },
      {
        source: '/Vacuum-Cleaners-DV-60.html',
        destination: '/products/vacuum-cleaner/dv-60',
        permanent: true,
      },
      {
        source: '/Vacuum-Cleaners-DV-80.html',
        destination: '/products/vacuum-cleaner/dv-80',
        permanent: true,
      },

      // Garbage Compactor Trucks
      {
        source: '/Garbage-Compactor-Trucks-DGCT-14.html',
        destination: '/products/garbage-compactor-trucks/DGCT-14',
        permanent: true,
      },
      {
        source: '/Garbage-Compactor-Trucks-DGCT-1400-DTMS-06.html',
        destination: '/products/garbage-compactor-trucks/DGCT-1400-DTMS-06',
        permanent: true,
      },
      {
        source: '/Garbage-Compactor-Trucks-DGCT-14000-DTMS-10.html',
        destination: '/products/garbage-compactor-trucks/DGCT-14000-DTMS-10',
        permanent: true,
      },
      {
        source: '/GarbageTipper-Truck.html', // Correcting the typo from your list
        destination: '/products/garbage-tipper-truck/generic-model', // Assuming a generic destination if no specific model is provided
        permanent: true,
      },
    ];
  },
  // END OF CHANGES: Update this redirects function
};

export default nextConfig;