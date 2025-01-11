from flask import Flask, render_template, jsonify, request
import os
import logging

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Define the path to the pre-existing video file
VIDEO_PATH = 'static/path_to_your_video_file/video.mp4'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze_traffic', methods=['POST'])
def analyze_traffic():
    logging.info("Checking video file path...")

    # Use dummy data directly, no need to check the video file existence
    try:
        # Simulate vehicle density data (dummy data for testing)
        traffic_status = "Average vehicle density: 25, the vehicle density of this place is moderate"
        
        # Log the result
        logging.info(f"Traffic analysis result: {traffic_status}")
        
        # Send the dummy traffic density as the response
        return jsonify({'message': traffic_status})
    
    except Exception as e:
        logging.error(f"Error processing video: {e}")
        return jsonify({'error': str(e)}), 500

# Run the application
if __name__ == '__main__':
    app.run(debug=True, port=5001)
