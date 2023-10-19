import unittest
from opinion_collection import OpinionSurvey

# Define unit tests

class MyTestCase(unittest.TestCase):
    def test_opinion_survey(self):
        questions = ['What is your favorite color?', 'What is your favorite food?']
        participants = ['Alice', 'Bob']
        survey = OpinionSurvey(questions)
        responses = survey.conduct_survey(participants)
        # Check that we got responses from all participants
        self.assertEqual(set(responses.keys()), set(participants))
        # Check that all questions were asked
        for participant_responses in responses.values():
            self.assertEqual(set(participant_responses.keys()), set(questions))

# Run the tests
if __name__ == '__main__':
    unittest.main()