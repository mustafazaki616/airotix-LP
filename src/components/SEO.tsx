import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'AIROTIX',
  description = 'AIROTIX: Leading computer vision and AI automation company. We teach machines to see, understand, and make decisions from visual data for industrial automation.',
  type = 'website',
  name = 'AIROTIX Technologies',
  imageUrl = '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['computer vision', 'AI automation', 'defect detection', 'quality control', 'industrial automation', 'surveillance analytics', 'machine learning', 'YOLOv8', 'TensorFlow', 'PyTorch', 'OpenCV'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://airotix.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://airotix.com${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = location.pathname.includes('computer-vision-manufacturing') 
    ? [
        ...keywords,
        'manufacturing quality control',
        'real-time defect detection',
        'automated inspection systems',
        'industrial computer vision',
        'production line automation',
        'quality assurance technology',
        'manufacturing efficiency',
        'visual inspection systems',
        'automated quality control',
        'industrial AI solutions'
      ]
    : location.pathname.includes('ai-powered-surveillance')
    ? [
        ...keywords,
        'intelligent surveillance systems',
        'security analytics',
        'behavior detection',
        'object tracking',
        'real-time monitoring',
        'security automation',
        'video analytics',
        'smart security solutions',
        'surveillance AI',
        'automated threat detection'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIROTIX Technologies',
    url: 'https://airotix.com',
    logo: 'https://airotix.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'Leading computer vision and AI automation company specializing in industrial solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@airotix.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/airotix',
      'https://twitter.com/airotix'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'AIROTIX Technologies',
      url: 'https://airotix.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIROTIX Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://airotix.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
        width: 512,
        height: 512
      },
      url: 'https://airotix.com'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for Computer Vision Manufacturing post
  const computerVisionFAQData = location.pathname.includes('computer-vision-manufacturing') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Computer Vision in Manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Computer vision in manufacturing uses AI-powered cameras and algorithms to automatically inspect products, detect defects, and ensure quality control in real-time. It replaces manual inspection with consistent, accurate, and fast automated systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does AIROTIX improve manufacturing quality control?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AIROTIX provides real-time defect detection systems that can identify scratches, misprints, holes, or misalignments on production lines. Our AI-powered solutions reduce waste, save costs, and ensure consistent product quality without human error.'
        }
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from AIROTIX computer vision solutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smart PPE benefits multiple industries including construction, manufacturing, oil & gas, fire & rescue, healthcare, mining, and any workplace where safety is paramount. Each industry can customize the technology to address specific safety challenges.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for Wearable Safety Tech ROI post
  const wearableSafetyROIFAQData = location.pathname.includes('wearable-safety-tech-protecting-workers-roi') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much do workplace injuries cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the National Safety Council, the average cost for a medically consulted work injury is $43,000 in 2023. With 2.2 injuries per 100 full-time workers, a 200-person site can expect about $215,000 in injury costs annually before accounting for downtime or replacement training.'
        }
      },
      {
        '@type': 'Question',
        name: 'What ROI can wearable safety technology deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Real-world deployments show significant returns: one study found 54% lower OSHA recordables and 88% fewer lost workdays. Another warehouse study showed 62% of workers reduced risky movements by half, with total ergonomic hazards falling 39%.'
        }
      },
      {  
        '@type': 'Question',
        name: 'What technologies does AIROTIX use for computer vision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AIROTIX combines the latest advancements including YOLOv8, TensorFlow, PyTorch, and OpenCV with practical industry experience to deliver robust computer vision solutions for real-world business problems.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="AIROTIX Technologies" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://airotix.com" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@airotix" />
      <meta name="twitter:creator" content="@airotix" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {computerVisionFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(computerVisionFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
