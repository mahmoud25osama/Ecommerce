import { Star } from "lucide-react";
import Slider from "react-slick";



const testimonials = [
        {
        id:1,
        name: "Sarah M.",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Amazing quality and fast delivery! Highly recommended.",
        rating:5
        },
        {
        id: 2,
        name: "Michael Chen",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        text: "Great customer service and excellent products. The fitness watch has completely changed my workout routine.",
        rating: 5
        },
        {
        id: 3,
        name: "Emma Williams",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        text: "Love the modern design and user-friendly website. Shopping here is always a pleasant experience.",
        rating: 5
        },
        
        {
        id:4,
        name: "James L.",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "The styles are so fresh and the support team is fantastic!",
        rating: 4
        },
        {
        id:5,
        name: "Emily R.",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Love the unique designs and the quality is top-notch!",
        rating: 3
        },
        {
        id:6,
        name: "Michael B.",
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
        text: "Customer service was super helpful and my order arrived quickly.",
        rating: 5
        },
        {
        id:7,
        name: "Olivia P.",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "I always find something new and exciting every time I visit!",
        rating: 4
        },
    ];



    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear"
        
    };

export const Testimonial = () => {

    return (
        <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">What Our Customers Say</h2>
                    <p className="text-xl text-gray-300">Real experiences from our valued customers</p>
                </div>
                <div className="relative">
                <div className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="flex items-center mb-6">
                                    <img
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-8 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">
                                        {testimonial.name}
                                        </h4>
                                        <div className="flex text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                        </div>
                                    </div>
                                    <blockquote className="text-lg lg:text-xl text-gray-700">
                                        “{testimonial.text}”
                                    </blockquote>
                                </div>
                        ))}
                    </Slider>
                </div>
                </div>
            </div>
        </div>
    )
}


