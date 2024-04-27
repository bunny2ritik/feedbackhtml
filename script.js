document.addEventListener('DOMContentLoaded', function () {
    // Get complaint ID from URL or set a default value
    const urlParams = new URLSearchParams(window.location.search);
    const complaintId = urlParams.get('q') || 'Unknown';
    document.getElementById('complaint_id').innerText = complaintId;

    // Handle submit button click
    document.getElementById('submit_btn').addEventListener('click', function () {
        const engineerReview = document.getElementById('engineer_review').value;
        const coordinatorReview = document.getElementById('coordinator_review').value;

        // Perform sentiment analysis (you can replace this with your backend logic)

        // Mock sentiment analysis results
        const engineerSentiment = "Service Engineer Sentiment: Good";
        const coordinatorSentiment = "Service Executive Coordinator Sentiment: Excellent";

        // Display sentiment analysis results
        document.getElementById('engineer_sentiment').innerText = engineerSentiment;
        document.getElementById('coordinator_sentiment').innerText = coordinatorSentiment;

        // Show the feedback result section
        document.getElementById('feedback_result').classList.remove('hidden');
    });
});
